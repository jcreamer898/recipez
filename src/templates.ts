import { Recipe } from './domain';

export const recipeTemplate = (recipe: Recipe) => {
    return `
# ${recipe.name}
${recipe.description}

## Ingredients
${recipe.recipeIngredient.map((ingredient) => `- ${ingredient}`).join('\n')}

## Instructions
${recipe.recipeInstructions
    .map((instruction, i) => `${i + 1}. ${instruction.text}`)
    .join('\n')}

*Imported from ${recipe.url || recipe.mainEntityOfPage}*
    `;
};
