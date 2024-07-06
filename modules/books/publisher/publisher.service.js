export const getAllPublishers = async () => {
  const publishers = useCollection("PUBLISHERS");
  const allPublishers = await publishers.find();

  return allPublishers;
};
