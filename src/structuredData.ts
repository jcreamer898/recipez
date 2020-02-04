import { Recipe, StructuredDataNode } from './domain';

export const toRecipe = (structuredData: any): Recipe => {
    let recipe = Array.isArray(structuredData)
        ? structuredData.find((sdata) => sdata['@type'] === 'Recipe')
        : structuredData['@graph'].find(
              (sdata: StructuredDataNode) => sdata['@type'] === 'Recipe',
          );

    if (!recipe) {
        return null;
    }

    return recipe;
};
