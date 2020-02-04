import { createRecipe } from './createRecipe';
import fetch from 'node-fetch';
import { recipeTemplate } from './templates';

export const app = async (url: string) => {
    const resp = await fetch(url, { method: 'get' });
    const text = await resp.text();

    const parsed = createRecipe(text);
    const contents = recipeTemplate(parsed);

    if (!parsed) {
        console.log(`Unable to get recipe for ${url}`);
        process.exit(0);
    }

    return {
        recipe: parsed,
        contents,
    };
};
