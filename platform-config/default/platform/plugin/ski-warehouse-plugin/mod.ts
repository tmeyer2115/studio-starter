export const getGenderId = (pageUrl: string) => {
  if (pageUrl.includes("women" || "woman")) {
    return "6490805738900090466";
  } else {
    return "5929891552541128688";
  }
};

export const getAbilityLevelId = (abilityStr: string) => {
  if (abilityStr.includes("Advanced-Expert")) {
    return "5195394095823606585";
  } else if (abilityStr.includes("Beginner-Intermediate")) {
    return "3726456647343833499";
  } else if (abilityStr.includes("Intermediate-Advanced")) {
    return "4422719013200450384";
  } else {
    return "";
  }
};

export const getTerrainId = (terrainStr: string) => {
  if (terrainStr.includes("All-Mountain")) {
    return "1295894924104146377";
  } else if (terrainStr.includes("Alpine Touring")) {
    return "7096784237424891914";
  } else if (terrainStr.includes("Big Mountain")) {
    return "7200013882251703847";
  } else if (terrainStr.includes("Carving")) {
    return "2656065563766201506";
  } else if (terrainStr.includes("Park & Pipe")) {
    return "463117075052872663";
  } else if (terrainStr.includes("Powder")) {
    return "1312210429080442948";
  } else {
    return "";
  }
};

export const getCategoryName = (terrainStr: string) => {
  if (terrainStr.includes("All-Mountain")) {
    return "All-Mountain";
  } else if (terrainStr.includes("Alpine Touring")) {
    return "Alpine Touring";
  } else if (terrainStr.includes("Big Mountain")) {
    return "Big Mountain";
  } else if (terrainStr.includes("Carving")) {
    return "Carving";
  } else if (terrainStr.includes("Park & Pipe")) {
    return "Park & Pipe";
  } else if (terrainStr.includes("Powder")) {
    return "Powder";
  } else {
    return "";
  }
};

export const getBootTypeFromPageUrl = (url: string) => {
  if (url.includes("alpine-touring")) {
    return "Alpine Touring";
  } else {
    return "Downhill";
  }
};

export const generateIdFromName = (name: string) => {
  // transform name to lowercase snake case and remove non alphanumeric characters
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "_")
    .replace(/_+/g, "_");
};

export const getImages = (images: string) => {
  // images is a comma separated string of image urls. split it into an array. remove any string that contains "youtube" and then map over the array to get the full size image url. return a comma separated string of the full size image urls
  return images
    .split(",")
    .filter((image) => !image.includes("youtube"))
    .map((image) => getFullSizeImageUrl(image))
    .join(",");
};
const getFullSizeImageUrl = (url: string) => {
  // find the occurence of /80/ and replace it with /700/
  return url.replace(/\/80\//, "/700/");
};
