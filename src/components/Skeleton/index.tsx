import styled from '@emotion/styled';
interface PropsSkeleton extends React.ComponentProps<'div'> {
  width: string;
  height: string;
  borderRadius?: string;
}

const Base = styled.div<PropsSkeleton>`
  border-radius: 4px;
  background: linear-gradient(90deg, #dfe3e8 0px, #efefef 40px, #dfe3e8 80px) 0%
    center / 200% 100%;
  animation:
    skeleton--zoom-in 0.2s ease-out,
    skeleton--loading 2s infinite linear;

  @keyframes skeleton--zoom-in {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes skeleton--loading {
    0% {
      background-position: 100%;
    }
    50% {
      background-position-x: -100%;
    }
    100% {
      background-position-x: -100%;
    }
  }
`;

const Box = styled(Base)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export default function Skeleton({
  width,
  height,
  borderRadius = '0%',
  ...props
}: PropsSkeleton) {
  return (
    <div>
      <Box
        width={width}
        height={height}
        borderRadius={borderRadius}
        {...props}></Box>
    </div>
  );
}
