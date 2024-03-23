import { Link } from 'react-router-dom';

interface AvatarProps {
  imageUrl: string;
  width: number;
  height: number;
  alt: string;
  linkTo?: string;
  className?: string;
}

const Avatar = ({ imageUrl, width, height, alt, linkTo, className }: AvatarProps): JSX.Element => {
  const avatarContent = (
    <img
      className={`avatar ${className || ''}`}
      src={imageUrl}
      width={width}
      height={height}
      alt={alt}
    />
  );

  return linkTo ? (
    <Link to={linkTo} className="avatar__link">
      {avatarContent}
    </Link>
  ) : avatarContent;
};

export default Avatar;
