import { describe, it, expect, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from "./App";

describe ('App', () => {
    it('testing rendering of the app', () => {
                
    const app = render(<App />);
    expect(app).toBeTruthy();
    })

})