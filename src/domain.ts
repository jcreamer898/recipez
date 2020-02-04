export interface RecipeFetcher {
    fetch(url: string): string;
}

export interface MarkdownParser {
    (str: string): string;
}

export interface RecipeParser {
    parser: MarkdownParser;
    parse(string: string): string;
}

export interface Recipe {
    name?: string;
    recipeIngredient?: string[];
    recipeInstructions?: { '@type': string; text: string }[];
    description?: string;
    image?: string;
    url?: string;
    prepTime?: string;
    cookTime?: string;
    totalTime?: string;
    recipeYield?: string;
    aggregateRating?: string;
    author?: string;
    video?: string;
    review?: string;
    datePublished?: string;
    mainEntityOfPage?: string;
}

export interface StructuredDataNode {
    '@type': string;
    '@context': string;
    [key: string]: any;
}
