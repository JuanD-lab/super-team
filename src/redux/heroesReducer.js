/* Actions */
export const addHeroToTeam = (heroData) => {
    return {
        type: "ADD_HERO_TO_TEAM",
        data: {
            heroData,
        },
    };
};

export const deleteHeroFromTeam = (id) => {
    return {
        type: "DELETE_HERO",
        data: {
            id,
        },
    };
};

/* Reducer */
const heroesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_HERO_TO_TEAM":
            const { heroData: newHero } = action.data;
            return [...state, newHero];
        case "DELETE_HERO":
            const { id: heroIdToRemove } = action.data;
            return [...state.filter((heroe) => heroe.id !== heroIdToRemove)];
        default:
            return state;
    }
};

export default heroesReducer;
