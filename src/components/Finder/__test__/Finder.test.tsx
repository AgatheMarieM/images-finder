import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Finder from "../Finder";
import "../../__mocks__/axios";


describe('Finder', () => {
    /* beforeEach(() => {
        vi.mock("../../__mocks__/axios");
    }) */


    const mockResponse1 = {
        data: {
            hits: [
                {
                    webFormatURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png'
                }
            ],
            total: 1
        }
    };

    const mockResponse2 = {
        data: {
            hits: [],
            total: 0
        }
    };

    const mockedSearch1 = vi.fn().mockResolvedValue(mockResponse1);
    const mockedSearch2 = vi.fn().mockResolvedValue(mockResponse2);


    //SeeMore Button appears on the page when request is completed
    it('SeeMore button appearing', async () => {
        const searchResults =
            [
                {
                    webFormatURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png'
                }
            ];
        const searchQuery = '';
        render(<Finder searchResults={searchResults} searchQuery={searchQuery} />);


        await(() => {
             const seeMoreComp =  screen.queryByTestId("see-more-component")  as HTMLElement ;
            expect(seeMoreComp).toBeVisible();

        })
           
       


    })




    //const mockedFunction = vi.fn();
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

