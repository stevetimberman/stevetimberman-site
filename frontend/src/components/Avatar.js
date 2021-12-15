import { Image } from "@mantine/core";

const Avatar = ({ ...props }) => {
  return (
    <Image
      {...props}
      src={process.env.PUBLIC_URL + "/AvatarImage.jpg"}
      fit="contain"
      radius={90}
      height={180}
      alt="ST"
    />
  );
};

export default Avatar;
