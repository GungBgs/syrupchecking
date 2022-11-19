
const SearchSimilar = ({search, data}) => {
    console.log(search)
    return (
        data.filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
    );
};

export default SearchSimilar;