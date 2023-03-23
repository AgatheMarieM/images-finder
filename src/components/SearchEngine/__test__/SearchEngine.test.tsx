import { describe, it, expect, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import SearchEngine from "../SearchEngine";

describe('SearchEngine tests', () => {

    /*   beforeEach(() => {
          vi.mock("../../__mocks__/axios");
      }) */
    const mockedSearch = vi.fn();


/*     const mockResponse1 = {
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
 */

    afterEach(cleanup); // testing environment is cleaned up and reset before the next test is run

    //https://vitest.dev/api/vi.html#vi-fn

    //1 Testing if input is red correctly
    it('user input red correctly', () => {
        render(
            <SearchEngine
                apiUrl={''}
                results={[""]}
                setResults={mockedSearch}
                query={""}
                setQuery={mockedSearch}
                page={1} />
        );
        const inputElement = screen.getByPlaceholderText("search for...") as HTMLInputElement;
        fireEvent.change(inputElement, { target: { value: 'dogs' } });
        expect(inputElement.value).toBe('dogs');
    })

    //1 Testing if go button is visible
    it('should have go button visible', () => {
        render(
            <SearchEngine
                apiUrl={''}
                results={[]}
                setResults={mockedSearch}
                query={""}
                setQuery={mockedSearch}
                page={1} />
        );
        const goButton = screen.getByTestId('go-button');
        expect(goButton).toBeVisible();
    })


 
    //NOT WORKING YET - on progress
    // Testing if message says no results if no results

    /*    let axios = require("axios");
       let MockAdapter = require("axios-mock-adapter");
       // This sets the mock adapter on the default instance
       let mock = new MockAdapter(axios);
       mock.onGet("/data").reply(200, {
           hits: [],
       });
       
   
       it('no result message', async () => {
   
           render(
               <SearchEngine
                   setResults={mockedSearch}
                   query={""}
                   setQuery={mockedSearch}
                   page={1} />
           );
   
           const goButton = screen.getByTestId('go-button');
           fireEvent.click(goButton);
   
           await axios.get("/results").then(function () {
               const messageHeader = screen.getByTestId(`message`);
               expect(messageHeader.textContent).toBe(`No results can be found`);
           });
   
       }) */

})
