import styled from '@emotion/styled';

export const PlaceListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

export const PlaceItem = styled.li`
  display: flex;
  padding: 1.4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const PlaceWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 0.5rem;
  cursor: pointer;
`;

export const PlaceIconWrapper = styled.div`
  transform: translateY(-0.6rem);
`;

export const PlaceInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.2rem;
`;

export const PlaceName = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const RoadAddress = styled.span``;
export const Address = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
`;

export const AddressTag = styled.span`
  background: ${({ theme }) => `${theme.colors.gray}90`};
  color: ${({ theme }) => theme.colors.whitePrimary};
  padding: 0.3rem 0.4rem;
  border-radius: 0.6rem;
  margin-right: 0.4rem;
  font-size: 1rem;
`;

export const PhoneNumber = styled.span`
  color: #0f6fff;
`;

export const EmptySearchResult = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  color: ${({ theme }) => theme.colors.gray};
`;
