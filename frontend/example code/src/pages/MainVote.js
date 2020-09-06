import React, { useContext, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 80px;
  h1 {
    height: 80px;
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
  }
`;

const CateItem = ({ className, category, setCurrentCategory }) => {
  return (
    <div
      className={className}
      onClick={() => {
        setCurrentCategory(category);
      }}
    >
      <div></div>
      <p>{category}</p>
    </div>
  );
};

const SCateItem = styled(CateItem)`
  width: 150px;
  min-width: 150px;
  height: 150px;
  border-radius: 100%;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url('https://res.cloudinary.com/kennycld/image/upload/v1594873172/characters/animal_img_sguri8.jpg');
  background-size: cover;
  background-position: center center;
  position: relative;
  div {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 50%;
    transition: opacity 0.3s linear;
  }
  p {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    cursor: pointer;
    div {
      opacity: 90%;
    }
  }

  &:nth-child(4n) {
    background-image: url('https://res.cloudinary.com/kennycld/image/upload/v1594873172/characters/flower_img_oamr0w.jpg');
  }
  &:nth-child(4n + 1) {
    background-image: url('https://res.cloudinary.com/kennycld/image/upload/v1594873171/characters/bug_img_nkmvdm.jpg');
  }
  &:nth-child(4n + 2) {
    background-image: url('https://res.cloudinary.com/kennycld/image/upload/v1594873171/characters/dino_img_d5kuom.jpg');
  }
  & + & {
    margin-left: 1rem;
  }
`;

const CateTabs = ({ className, setCurrentCategory }) => {
  const categories = [
    'Bugs1',
    'Dinos1',
    'Animals1',
    'Flowers1',
    'Bugs2',
    'Dinos2',
    'Animals2',
    'Flowers2',
  ];
  return (
    <div className={className}>
      {categories.map((category) => (
        <SCateItem
          key={category}
          category={category}
          setCurrentCategory={setCurrentCategory}
        />
      ))}
    </div>
  );
};

const SCateTabs = styled(CateTabs)`
  width: 100%;
  overflow: scroll;
  padding: 0 5rem;
  display: flex;
  justify-content: start;
`;

const CatePanel = ({ className, currentCategory }) => {
  return <h1 className={className}>Vote List: {currentCategory}</h1>;
};

const SCatePanel = styled(CatePanel)``;

const GridWrapper = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  display: grid;
  gap: 1rem 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 400px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  display: grid;
  grid-template-rows: 360px 1fr;
`;

const GridImage = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  width: 100%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
  }
`;

const GridItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  button {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border: none;
    border-radius: 15px;
    background: #1abc9c;
    color: white;
    cursor: pointer;
    &:last-child {
      background: #f1c40f;
    }
  }
`;

const VoteItem = styled.div`
  border-radius: 25px;
  padding: 3rem;
  height: 700px;
  width: 500px;
  background: white;
  border: 5px solid #3498db;
  position: absolute;
  z-index: 100;
  left: 40%;
  div.vote-title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  div.vote-candidates {
    display: flex;
    flex-direction: column;
  }
  div.btns {
    display: flex;
    div.close-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 80px;
      height: 30px;
      margin-top: 30px;
      background: #e74c3c;
    }
    div.vote-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      width: 80px;
      height: 30px;
      margin-top: 30px;
      margin-left: 10px;
      background: #3498db;
    }
  }
`;

const MainVote = () => {
  const [currentCategory, setCurrentCategory] = useState('Bugs1');
  const [isVoteOpen, setIsVoteOpen] = useState(false);

  const onImageClick = () => {
    setIsVoteOpen(true);
  };
  const onCloseClick = () => {
    setIsVoteOpen(false);
  };
  const onVoteClick = () => {
    alert('You voted');
  };
  const onCommentClick = () => {
    alert('You made a comment');
  };
  return (
    <Container>
      <h1>Main Vote</h1>
      {isVoteOpen && (
        <VoteItem>
          <div className="vote-title">What Is Your Favorite Dog?</div>
          <div className="vote-candidates">
            <div className="vote-cadidate">
              <input type="checkbox" id="checkbox1" />
              <label for="checkbox1">
                <img
                  alt="vote"
                  src="https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/animal_characters05_ifoidc.png"
                />
                <div>Dog 1</div>
              </label>
            </div>
            <div className="vote-cadidate">
              <input type="checkbox" id="checkbox2" />
              <label for="checkbox2">
                <img
                  alt="vote"
                  src="https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/animal_characters05_ifoidc.png"
                />
                <div>Dog 1</div>
              </label>
            </div>
            <div className="vote-cadidate">
              <input type="checkbox" id="checkbox3" />
              <label for="checkbox3">
                <img
                  alt="vote"
                  src="https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/animal_characters05_ifoidc.png"
                />
                <div>Dog 1</div>
              </label>
            </div>
          </div>
          <div className="btns">
            <div className="close-button" onClick={onCloseClick}>
              Close
            </div>
            <div className="vote-button" onClick={onCloseClick}>
              Vote
            </div>
          </div>
        </VoteItem>
      )}
      <SCateTabs
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <SCatePanel currentCategory={currentCategory} />
      <GridWrapper>
        <GridItem>
          <GridImage onClick={onImageClick}>
            <img
              alt="vote"
              src="https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/animal_characters11_zdksf8.png"
            />
          </GridImage>
          <GridItemInfo>
            <div>Vote Item</div>
            <div>
              <button onClick={onVoteClick}>vote</button>
              <button onClick={onCommentClick}>comment</button>
            </div>
          </GridItemInfo>
        </GridItem>
        <GridItem>
          <GridImage onClick={onImageClick}>
            <img
              alt="vote"
              src="https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/animal_characters05_ifoidc.png"
            />
          </GridImage>
          <GridItemInfo>
            <div>Vote Item</div>
            <div>
              <button onClick={onVoteClick}>vote</button>
              <button onClick={onCommentClick}>comment</button>
            </div>
          </GridItemInfo>
        </GridItem>
        <GridItem>
          <GridImage onClick={onImageClick}>
            <img
              alt="vote"
              src="https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/animal_characters06_prvayg.png"
            />
          </GridImage>
          <GridItemInfo>
            <div>Vote Item</div>
            <div>
              <button onClick={onVoteClick}>vote</button>
              <button onClick={onCommentClick}>comment</button>
            </div>
          </GridItemInfo>
        </GridItem>
        <GridItem>
          <GridImage onClick={onImageClick}>
            <img
              alt="vote"
              src="https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/animal_characters07_jrkqvo.png"
            />
          </GridImage>
          <GridItemInfo>
            <div>Vote Item</div>
            <div>
              <button onClick={onVoteClick}>vote</button>
              <button onClick={onCommentClick}>comment</button>
            </div>
          </GridItemInfo>
        </GridItem>
        <GridItem>
          <GridImage onClick={onImageClick}>
            <img
              alt="vote"
              src="https://res.cloudinary.com/kennycld/image/upload/v1591271264/animal%20characters/animal_characters01_zzktfy.png"
            />
          </GridImage>
          <GridItemInfo>
            <div>Vote Item</div>
            <div>
              <button onClick={onVoteClick}>vote</button>
              <button onClick={onCommentClick}>comment</button>
            </div>
          </GridItemInfo>
        </GridItem>
        <GridItem>
          <GridImage onClick={onImageClick}>
            <img
              alt="vote"
              src="https://res.cloudinary.com/kennycld/image/upload/v1591271264/animal%20characters/animal_characters02_cfkc86.png"
            />
          </GridImage>
          <GridItemInfo>
            <div>Vote Item</div>
            <div>
              <button onClick={onVoteClick}>vote</button>
              <button onClick={onCommentClick}>comment</button>
            </div>
          </GridItemInfo>
        </GridItem>
      </GridWrapper>
    </Container>
  );
};

export default MainVote;
