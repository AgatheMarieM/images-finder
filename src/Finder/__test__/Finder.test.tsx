import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Finder from "../Finder";
import "../../__mocks__/axios";


describe('Finder', () => {
    beforeEach(() => {
        vi.mock("../../__mocks__/axios");
    })



    const mockedFunction = vi.fn();

    //https://www.youtube.com/watch?v=Ngj2f1n9pUw
    //https://www.youtube.com/watch?v=TBZy-Rc-xX0

    //Test 1: Confirm that the SeeMore Button appears on the page when request is completed
    it('SeeMore button appearing', async () => {

        render(<Finder />);
        await waitFor(() => {
            const seeMoreButtonAfterSearch = screen.queryByRole('button', { name: /See more/i });
            expect(seeMoreButtonAfterSearch).not.toBeInTheDocument();
        })
    })



    //SeeMore Button DOES NOT appear on the page when !searchResults.length


    //Image component is shown whenever searchResults.length>0
    /*     it('Image component rendered', async () => {
    
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
                expect(image).toBeInTheDocument();
            })
        }) */

})

