import styled from '@emotion/styled'

export const PokemonImage = styled.div`
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-8);
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
