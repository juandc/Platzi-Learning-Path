import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { MdImage, MdSave, MdOpenInNew } from 'react-icons/md';
import { ActionButton, ActionLinkButton } from './ActionButton';
import { Modal } from './Modal';

const saveBase64AsFile = (base64, fileName) => {
  const link = document.createElement('a');

  link.setAttribute('href', base64);
  link.setAttribute('download', fileName);
  link.click();
};

const saveImage = link => saveBase64AsFile(link, `ruta-de-aprendizaje`);
const openInNewTab = link =>
  window
    .open()
    .document.write(
      '<iframe src="' +
        link +
        '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
    );
// window.open().document.write(`<img src="${canvas.toDataURL()}" />`);

export const CaptureScreen = ({ className, username, items }) => {
  const [imgLink, setImgLink] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const captureScreen = () => {
    console.log(html2canvas);
    // document.body.style.backgroundImage =
    //   'url("https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80")';
    // document.body.style.backgroundSize = 'cover';
    // document.body.style.backgroundRepeat = 'no-repeat';
    // document.body.style.height = '100vh';
    html2canvas(document.body, {
      backgroundColor: null,
      scale: 1,
      width: 1000,
      height: 1250,
      windowWidth: 1000,
      windowHeight: 1000,
      imageTimeout: 3000,
      useCORS: true,
    }).then(c => {
      setImgLink(c.toDataURL());
      setShowModal(true);
    });
  };

  const [imgLink2, setImgLink2] = useState(null);

  const captureScreen2 = () => {
    console.log(html2canvas);
    html2canvas(document.getElementById('lalala'), {
      // scale: 10,
      // width: 250,
      // scrollY: 5,
      // height: 350,
      // windowWidth: 1000,
      windowHeight: 845,
      imageTimeout: 0,
      // imageTimeout: 5000,
      useCORS: true,
    }).then(c => {
      setImgLink2(c.toDataURL());
    });
  };

  const show = items > 2;
  const handleModal = bool => {
    setShowModal(bool);
  };

  return (
    <div>
      <ActionButton show={show} onClickAction={() => captureScreen()}>
        <MdImage className="m-auto" />
      </ActionButton>
      <Modal onOutClick={handleModal} show={showModal}>
        <div className="w-full max-w-md h-auto p-6 pb-0" style={{ paddingTop: '0'}}>
          <div id="lalala" style={{ width: '400px', height: '500px', backgroundSize: 'cover', backgroundImage: 'url("https://instagram.fbog11-1.fna.fbcdn.net/v/t51.2885-15/e35/74339842_940213813019741_3965249199834684398_n.jpg?_nc_ht=instagram.fbog11-1.fna.fbcdn.net&_nc_cat=105&oh=869d54f54284fa6685a493b90ac1a20f&oe=5E6DADF7")' }}>
          {/* <img
            style={{
              position: 'absolute',
              zIndex: -1,
              width: '400px',
              height: '400px',
            }}
            src="https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
            className="shadow-lg border-gray-300 border-solid border-2"
          /> */}
          <img
            src={imgLink}
            alt=""
            className="border-gray-300 border-solid border-2"
            />
          </div>

        </div>
        <div className="w-full max-w-md h-auto p-6 pb-0" >
          <img
            src={imgLink2}
            alt=""
            className="border-gray-300 border-solid border-2"
            style={{ width: '400px' }}
          />
        </div>
        <div className="flex align-middle text-center px-6 my-2">
          <ActionButton
            onClickAction={() => saveImage(imgLink)}
            show={show && imgLink}
          >
            <MdSave className="m-auto" />
          </ActionButton>
          <span className="my-auto md:text-sm">Guardar Imagen</span>

          <br />

          <button onClick={captureScreen2}>Segunda imagen</button>
        </div>
      </Modal>
    </div>
  );
};
