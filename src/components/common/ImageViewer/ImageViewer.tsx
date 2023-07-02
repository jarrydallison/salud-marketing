import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export const ImageViewer = ({
  images,
}: {
  images: ReactImageGalleryItem[];
}) => <ImageGallery items={images} />;
