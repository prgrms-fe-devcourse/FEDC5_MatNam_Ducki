import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { reviewAtom } from '@/recoil/review';
import { PATH } from '@/routes/path';
import { PlaceInfoType, PlaceType, PositionType } from '@/types/placeMap';

import PlaceList from './PlaceList';
import {
  SearchKeyword,
  SearchKeywordWrapper,
  SearchResultWrapper,
} from './style';

interface SearchMapProps {
  searchKeyword: string;
}
const { kakao } = window as any;

export default function SearchMap({ searchKeyword }: SearchMapProps) {
  const [placeList, setPlaceList] = useState<PlaceType[]>([]);
  const [reviewState, setReviewState] = useRecoilState(reviewAtom);

  const navigate = useNavigate();

  const [map, setMap] = useState<any>();

  let markers: any[] = [];

  function moveMap(position: PositionType) {
    if (!map) return;
    map.panTo(position);
  }

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };

    const updatedMap = new kakao.maps.Map(mapContainer, mapOption);
    setMap(updatedMap);
  }, [searchKeyword]);

  useEffect(() => {
    const ps = new kakao.maps.services.Places();

    searchPlaces();

    function searchPlaces() {
      if (!searchKeyword.trim()) return;
      ps.keywordSearch(searchKeyword, placesSearchCB);
    }

    function placesSearchCB(data: PlaceType[], status: string) {
      if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
        setPlaceList(data);
      } else {
        setPlaceList([]);
      }
    }

    function displayPlaces(places: PlaceType[]) {
      const listEl = document.getElementById('places-list'),
        resultEl = document.getElementById('search-result'),
        fragment = document.createDocumentFragment();

      listEl && removeAllChildNodes(listEl);

      removeMarker();

      for (let i = 0; i < places.length; i++) {
        const place = places[i];
        const { place_name, place_url, x, y } = place;

        const placePosition = new kakao.maps.LatLng(y, x);

        addMarker(placePosition);

        if (i === 0) {
          moveMap(placePosition);
        }

        const content =
          '<div class="customoverlay" style="position:relative;bottom:50px;border-radius:6px;border:1px solid #F3F2F2;background-color:#fff; padding: 8px 10px; color:#FFA41B; font-weight:600; font-size:14px; box-shadow:0px 1px 1px #ccc;">' +
          `<a href="${place_url}" target="_blank">` +
          `<span class="title" style="padding-right:30px">${place_name}</span>` +
          '<div style="position:absolute;top:0;right:0;background:#FFA41B; width:30px; height:calc(100% + 1px); border-radius:0 6px 6px 0; background: #FFA41B url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 10px center"></div>' +
          '</a></div>';

        new kakao.maps.CustomOverlay({
          map: map,
          position: placePosition,
          content: content,
          yAnchor: 1,
        });
      }

      listEl && listEl.appendChild(fragment);

      if (resultEl) {
        resultEl.scrollTop = 0;
      }
    }

    function addMarker(position: PositionType) {
      const imageSrc = '/images/marker.png',
        imageSize = new kakao.maps.Size(36, 36),
        imgOptions = {
          offset: new kakao.maps.Point(18, 40),
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions,
        ),
        marker = new kakao.maps.Marker({
          position: position,
          image: markerImage,
        });

      marker.setMap(map);
      markers.push(marker);
    }

    function removeMarker() {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    function removeAllChildNodes(node: HTMLElement) {
      while (node.hasChildNodes()) {
        node.lastChild && node.removeChild(node.lastChild);
      }
    }
  }, [map]);

  const SearchResult = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
  `;

  const handleClickPlace = ({ restaurant, location }: PlaceInfoType) => {
    // 상위 컴포넌트에 가게 정보를 전달하는 부분 처리 필요
    console.log('가게 정보: ', restaurant, location);
    setReviewState({ ...reviewState, restaurant, location });

    navigate(PATH.REVIEW);
  };

  return (
    <div className="map_wrap">
      <div
        id="map"
        css={css`
          width: 100%;
          height: ${searchKeyword ? '50%' : '100%'};
          position: absolute;
          top: 0;
          left: 0;
        `}
      />
      <SearchResultWrapper>
        {searchKeyword && (
          <SearchResult>
            <SearchKeywordWrapper>
              <SearchKeyword>{searchKeyword}</SearchKeyword>
              검색 결과
            </SearchKeywordWrapper>
            <PlaceList
              placeList={placeList}
              onMoveMap={moveMap}
              onClickPlace={handleClickPlace}
            />
          </SearchResult>
        )}
      </SearchResultWrapper>
    </div>
  );
}
