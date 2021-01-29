const getPaletteModifier = (count, blockGenerator, element) => {
  if (count === 0) return '';

  let modifier;
  if (count === 1) modifier = { palette: 'whatsapp' };
  if (count > 1) modifier = { palette: 'gitlab' };
  return element ? blockGenerator(element, modifier) : blockGenerator(modifier);
};

export default getPaletteModifier;
