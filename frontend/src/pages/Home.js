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
                <label htmlFor="category">Filter by:</label>{" "}
                <select
                    id="size"
                    // value={category}
                    onChange={() => { }}
                >
                    <option value="Latest Ideas">Latest Ideas</option>
                    <option value="Latest Comments">Latest Comments</option>
                    <option value="Most Popular">Most Popular</option>
                    <option value="Most Viewed">Most Viewed</option>
                    <option value="Most Recent">Most Recent</option>
                    <option value="Most Comments">Most Comments</option>
                    <option value="Category">Category</option>
                </select>
                {/* {category && <h2>Found {filteredProducts.length} items</h2>} */}
            </section>
            <section id="filters">
                <label htmlFor="category">Category:</label>{" "}
                <select
                    id="size"
                    // value={category}
                    onChange={() => { }}
                >
                    <option value="Teaching">Teaching</option>
                    <option value="Office">Office</option>
                    <option value="Red">Red</option>
                    <option value="Red">Red</option>
                    <option value="Red">Red</option>
                </select>
                {/* {category && <h2>Found {filteredProducts.length} items</h2>} */}
            </section>

            <div>
                <h1>Spotlight Ideas</h1>
            </div>

        </div>
    )
}

export default Home;