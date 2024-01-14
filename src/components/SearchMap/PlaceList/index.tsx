import PlaceIcon from '@/components/Common/Icons/PlaceIcon';
import { PlaceInfoType, PlaceType, PositionType } from '@/types/placeMap';

import {
  Address,
  AddressTag,
  EmptySearchResult,
  PhoneNumber,
  PlaceIconWrapper,
  PlaceInfo,
  PlaceItem,
  PlaceListWrapper,
  PlaceName,
  PlaceWrapper,
  RoadAddress,
} from './style';

interface PlaceListProps {
  placeList: PlaceType[];
  onMoveMap: (position: PositionType) => void;
  onClickPlace: (props: PlaceInfoType) => void;
}

const { kakao } = window as any;

export default function PlaceList({
  placeList,
  onMoveMap,
  onClickPlace,
}: PlaceListProps) {
  const handleMouseOver = (x: string, y: string) => {
    const placePosition = new kakao.maps.LatLng(y, x);
    onMoveMap(placePosition);
  };

  const handleClick = (restaurant: string, location: string) => {
    onClickPlace({ restaurant, location });
  };

  return (
    <PlaceListWrapper id="places-list">
      {placeList.length !== 0 ? (
        placeList.map(
          ({
            id,
            place_name,
            road_address_name,
            address_name,
            phone,
            x,
            y,
          }) => (
            <PlaceItem key={id} id="places-item">
              <PlaceWrapper
                onMouseOver={() => handleMouseOver(x, y)}
                onClick={() => handleClick(place_name, road_address_name)}>
                <PlaceIconWrapper>
                  <PlaceIcon width={30} height={30} />
                </PlaceIconWrapper>
                <PlaceInfo>
                  <PlaceName>{place_name}</PlaceName>
                  <RoadAddress>{road_address_name}</RoadAddress>
                  <Address>
                    <AddressTag>지번</AddressTag>
                    {address_name}
                  </Address>
                  {phone && <PhoneNumber>{phone}</PhoneNumber>}
                </PlaceInfo>
              </PlaceWrapper>
            </PlaceItem>
          ),
        )
      ) : (
        <EmptySearchResult>검색 결과가 없습니다.</EmptySearchResult>
      )}
    </PlaceListWrapper>
  );
}
