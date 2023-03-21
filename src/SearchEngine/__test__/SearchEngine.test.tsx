
import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchEngine from "../SearchEngine";

const mockedSearch = vi.fn();

describe('SearchEngine tests', () => {
    //1 Testing if input is red correctly
    it('user input red correctly', () => {
        render(
            <SearchEngine
                setResults={mockedSearch}
                query={""}
                setQuery={mockedSearch}
                page={1} />
        );
        const inputElement = screen.getByPlaceholderText("search for...") as HTMLInputElement;
        fireEvent.change(inputElement, {target: {value: 'dogs'}});
        expect(inputElement.value).toBe('dogs');
    })

    //2 Testing if input is red correctly



})
