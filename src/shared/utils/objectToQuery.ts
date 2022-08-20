export const objectToQuery = (obj: Object, shouldStringfy?: boolean) => {
  const str: string[] = [];
  for (let key in obj) {

    const key = obj[key];
    
    if (key && key !== undefined && key !== null) {
      if (shouldStringfy)
        str.push(
          encodeURIComponent(key) +
            "=" +
            encodeURIComponent(JSON.stringify(obj[key]))
        );
      else
        str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  }
  return str.join("&");
};
