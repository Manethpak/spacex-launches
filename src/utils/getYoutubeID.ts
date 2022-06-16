const getYoutubeID = (link: string): string => {
  const splited = link.split("/");
  return splited[splited.length - 1];
};

export default getYoutubeID;
