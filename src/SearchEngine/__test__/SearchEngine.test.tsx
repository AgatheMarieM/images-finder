import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchEngine from "../SearchEngine";
import { AxiosAdapter } from 'axios';

describe('SearchEngine tests', () => {

    const mockedSearch = vi.fn();
    //https://vitest.dev/api/vi.html#vi-fn

    //1 Testing if input is red correctly
    it('user input red correctly', () => {
        render(
            <SearchEngine
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
                results={[""]}
                setResults={mockedSearch}
                query={""}
                setQuery={mockedSearch}
                page={1} />
        );
        const goButton = screen.getByTestId('go-button');
        expect(goButton).toBeVisible();
    })

    //NOT WORKING YET - on progress
    //3 Testing if message says no results if no results

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
