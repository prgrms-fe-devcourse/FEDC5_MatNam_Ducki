import PlaceIcon from '@/components/Common/Icons/PlaceIcon';
import { PlaceType, PositionType } from '@/types/placeMap';

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
}

const { kakao } = window as any;

export default function PlaceList({ placeList, onMoveMap }: PlaceListProps) {
  const handleMouseOver = (x: string, y: string) => {
    const placePosition = new kakao.maps.LatLng(y, x);
    onMoveMap(placePosition);
  };

  return (
    <PlaceListWrapper id="places-list">
      {placeList.length !== 0 ? (
        placeList.map(
          ({
            id,
            place_url,
            place_name,
            road_address_name,
            address_name,
            phone,
            x,
            y,
          }) => (
            <PlaceItem key={id} id="places-item">
              <PlaceWrapper onMouseOver={() => handleMouseOver(x, y)}>
                <PlaceIconWrapper>
                  <PlaceIcon width={30} height={30} />
                </PlaceIconWrapper>
                <PlaceInfo href={place_url} target="_blank">
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
