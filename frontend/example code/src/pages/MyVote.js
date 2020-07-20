import React, { useState } from 'react';
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

const Profile = styled.div`
  padding-left: 4rem;
  width: 40%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .profile-photo {
    width: 150px;
    min-width: 150px;
    height: 150px;
    background-image: url('https://res.cloudinary.com/kennycld/image/upload/v1594889478/characters/person_image_jz3jdn.jpg');
    background-size: cover;
    background-position: center center;
  }
  .profile-info {
    font-weight: 600;
    font-size: 1.5rem;
    button {
      font-size: 1rem;
      margin-top: 30px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 25px;
      padding: 0.8rem 1.2rem;
      cursor: pointer;
    }
  }
`;

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

const Edit = styled.div`
  border-radius: 25px;
  padding: 3rem;
  height: 700px;
  width: 500px;
  background: white;
  border: 5px solid #3498db;
  position: absolute;
  z-index: 100;
  left: 40%;
  form {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    label {
      margin-top: 1rem;
    }
    input {
      margin-top: 1rem;
      padding: 1rem;
    }
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

const MyVote = () => {
  const [isVoteOpen, setIsVoteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const onImageClick = () => {
    setIsVoteOpen(true);
  };
  const onCloseClick = () => {
    setIsVoteOpen(false);
    setIsEditOpen(false);
  };
  const onVoteClick = () => {
    console.log('vote btn clicked');
  };
  const onCommentClick = () => {
    console.log('comment btn clicked');
  };
  const onEditClick = () => {
    setIsEditOpen(true);
  };
  return (
    <Container>
      <h1>My Vote</h1>
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
      {isEditOpen && (
        <Edit>
          <form>
            <label for="name">Name</label>
            <input id="name" placeholder="change name" />
            <label for="pw1">Name</label>
            <input id="pw1" placeholder="change password" />
            <label for="pw2">Name</label>
            <input id="pw2" placeholder="confirm new password" />
          </form>
          <div className="btns">
            <div className="close-button" onClick={onCloseClick}>
              Close
            </div>
            <div className="vote-button" onClick={onCloseClick}>
              Edit
            </div>
          </div>
        </Edit>
      )}
      <Profile>
        <div className="profile-photo"></div>
        <div className="profile-info">
          <div>Kenny</div>
          <button onClick={onEditClick}>Edit</button>
        </div>
      </Profile>
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

export default MyVote;
