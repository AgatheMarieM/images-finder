import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Finder from "../Finder";

describe('Finder', () => {
    const mockedFunction = vi.fn();
    //Test 1: Confirm that the SeeMore Button appears on the page when searchResults.length>0
    it('SeeMore button appearing', async () => {

        const searchResults = ["a", "b", "c"];
        const searchQuery = "whatever";

        render(<Finder
            searchResults={searchResults}
            setSearchResults={mockedFunction}
            searchPage={1}
            setSearchPage={mockedFunction}
            searchQuery={searchQuery}
            setSearchQuery={mockedFunction}
        />);

        await (() => {
            const seeMoreButtonAfterSearch = screen.findByRole('button', { name: "See more" });
            expect(seeMoreButtonAfterSearch).toBeInTheDocument();
        })
    })

    //Test 2: Confirm that the SeeMore Button DOES NOT appear on the page when !searchResults.length
    it('SeeMore button appearing', async () => {

        const searchResults = [];
        const searchQuery = "kyvjhmbtd";

        render(<Finder
            searchResults={searchResults}
            setSearchResults={mockedFunction}
            searchPage={1}
            setSearchPage={mockedFunction}
            searchQuery={searchQuery}
            setSearchQuery={mockedFunction}
        />);

        await (() => {
            const seeMoreButtonAfterSearch = screen.findByRole('button', { name: "See more" });
            expect(seeMoreButtonAfterSearch).not.toBeInTheDocument();
        })
    })

    //Test 3: Confirm if Image component is shown whenever searchResults.length>0
    it('Image component rendered', async () => {

        const searchResults = ["a", "b", "c"];
        const searchQuery = "whatever";

        render(<Finder
            searchResults={searchResults}
            setSearchResults={mockedFunction}
            searchPage={1}
            setSearchPage={mockedFunction}
            searchQuery={searchQuery}
            setSearchQuery={mockedFunction}
        />);

        await (() => {
            const image = screen.findByTestId("image");
            //asynchronous wait for image to appear before continuing with the test
            //'awaiting' for findByTestId method to finish executing
            expect(image).toBeInTheDocument();
        })
    })

    //Test 4: Confirm if Image component is NOT shown whenever !searchResults.length
    it('Image component not rendered', async () => {

        const searchResults = [];
        const searchQuery = "whdgsrt";

        render(<Finder
            searchResults={searchResults}
            setSearchResults={mockedFunction}
            searchPage={1}
            setSearchPage={mockedFunction}
            searchQuery={searchQuery}
            setSearchQuery={mockedFunction}
        />);


        const image = await screen.queryByTestId("image");
        expect(image).not.toBeInTheDocument();
        //queryByTestID returns null if element not present! getByTestID and findByTEstID throws error, not what we want
 
    })


})

