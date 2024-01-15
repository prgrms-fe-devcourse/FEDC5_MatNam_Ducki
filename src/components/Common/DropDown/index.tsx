import { useState } from 'react';

import { MeatBallMenu } from '../Icons/MeatBallMenu';
import { DropDownItem, DropDownWrapper } from './style';

interface DropDownItemData {
  name: string;
  onClick: () => void;
}

interface DropDownContainerProps {
  items: DropDownItemData[];
}

export default function DropDownContainer({ items }: DropDownContainerProps) {
  const [view, setView] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <MeatBallMenu onClick={() => setView(!view)} />
      {view && (
        <DropDownWrapper>
          {items.map((item, index) => (
            <DropDownItem key={index} onClick={item.onClick}>
              {item.name}
            </DropDownItem>
          ))}
        </DropDownWrapper>
      )}
    </div>
  );
}
