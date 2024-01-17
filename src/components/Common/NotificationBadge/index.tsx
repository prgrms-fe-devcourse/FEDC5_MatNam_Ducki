import { BadgeContainer, Super } from './style';

interface NotificationBadgeProps {
  children: React.ReactNode;
  count?: number;
  maxCount?: number;
  showZero?: boolean;
  dot?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export default function NotificationBadge({
  children,
  count,
  maxCount,
  showZero,
  dot = false,
  backgroundColor,
  textColor,
  ...props
}: NotificationBadgeProps) {
  const colorStyle = {
    backgroundColor,
    color: textColor,
  };

  let badge = null;
  if (count) {
    badge = (
      <Super style={colorStyle}>
        {maxCount && count > maxCount ? `${maxCount}+` : count}
      </Super>
    );
  } else {
    if (count !== undefined) {
      badge = showZero ? <Super style={colorStyle}>0</Super> : null;
    } else if (dot) {
      badge = <Super className="dot" style={colorStyle} />;
    }
  }
  return (
    <BadgeContainer {...props}>
      {children}
      {badge}
    </BadgeContainer>
  );
}
