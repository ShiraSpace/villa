import { handleLinkClick } from './navigation-utils';

describe('navigation-utils', () => {
  describe('handleLinkClick', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
    });

    it('should scroll to element when it exists', () => {
      const mockElement = document.createElement('div');
      mockElement.id = 'hero';
      mockElement.scrollIntoView = jest.fn();

      document.body.appendChild(mockElement);

      handleLinkClick('#hero');

      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('should not throw error when element does not exist', () => {
      expect(() => handleLinkClick('#nonexistent')).not.toThrow();
    });

    it('should not scroll when element is null', () => {
      const scrollIntoViewMock = jest.fn();
      Element.prototype.scrollIntoView = scrollIntoViewMock;

      handleLinkClick('#nonexistent');

      expect(scrollIntoViewMock).not.toHaveBeenCalled();
    });
  });
});
