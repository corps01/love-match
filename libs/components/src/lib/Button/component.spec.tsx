import { render } from '@testing-library/react';

import Components from './component';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components />);
    expect(baseElement).toBeTruthy();
  });
});
