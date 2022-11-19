
const SearchSimilar = ({search, data}) => {
    return (
        data.filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
    );
};

export default SearchSimilar;