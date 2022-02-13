import { Search } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import PageNotFound from '../components/errorHandling/PageNotFound';
import LoadingIndicator from '../components/Loading';
import NavBar from '../components/Header/NavBar';
import useFetch from '../services/useFetch';

const Home = () => {
    const { data: ideas, loading, error } = useFetch(
        "idea"
    );


    if (error) throw error;
    if (loading) return <LoadingIndicator />;
    if (ideas.length === 0) return <PageNotFound />;

    return (
        <div className="home">
            <NavBar></NavBar>
            <Search page="idea"></Search>
            <h1>Welcome</h1>
            <section id="filters">
                <label htmlFor="category">Filter by Category:</label>{" "}
                <select
                    id="size"
                    // value={category}
                    onChange={() => { }}
                >
                    <option value="">All category</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                </select>
                {/* {category && <h2>Found {filteredProducts.length} items</h2>} */}
            </section>

        </div>
    )
}

export default Home;