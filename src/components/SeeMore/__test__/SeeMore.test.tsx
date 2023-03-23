import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import SeeMore from '../SeeMore';
import "../../__mocks__/axios";


describe('SeeMore', () => {

/*   beforeEach(() => {
    vi.mock("../../__mocks__/axios");
}) */

const mockedFunction = vi.fn();

const mockResponse = {
  data: {
      hits: [],
      total: 0
  }
} ;

  //Test 1: button not rendered when no results
  it('button not rendered', async () => {

    render(
      <SeeMore
        apiUrl={''}
        results={mockResponse.data.hits}
        setResults={mockedFunction}
        query=""
        page={1}
        setPage={mockedFunction}
      />
    );



   
  });
}); 