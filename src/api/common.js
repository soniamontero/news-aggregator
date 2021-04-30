const groupBy = (items, key, mapping) => {
  return items.reduce((result, item) => {
    const newObject = mapping(item);
    return {
      ...result,
      [item[key]]: [...(result[item[key]] || []), newObject]
    };
  }, {});
};

export default groupBy;
