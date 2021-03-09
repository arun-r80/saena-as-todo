import {render,screen} from '@testing-library/react';
import App from '../../containers/App';

beforeAll(() => {
    render(<App/>)
})


it('test setup is done correctly',() => {
    expect(1+1).toBe(2);
});