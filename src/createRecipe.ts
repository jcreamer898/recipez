import cheerio from 'cheerio';
import { toRecipe } from './structuredData';

export const createRecipe = (recipe: string) => {
    const data = parse(recipe);

    if (!data) {
        return null;
    }

    return data;
};

export const parse = (recipe: string) => {
    const $ = cheerio.load(recipe);
    const sdata = $("script[type='application/ld+json']").html();

    if (sdata) {
        const data = toRecipe(JSON.parse(sdata));
        return data;
    }

    return null;
};
