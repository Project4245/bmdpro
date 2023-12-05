import React, { useState } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';

function CustomSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button color="primary" onClick={toggleSidebar}>
        Open
      </Button>
      <Offcanvas isOpen={isOpen} direction="end" toggle={toggleSidebar}>
        <OffcanvasHeader toggle={toggleSidebar}>Offcanvas</OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default CustomSidebar;



// function CustomSiddebar(){
//     const sidebar = (() => {
//         <div>
//             <Button
//                 color="primary"
//                 onClick={function noRefCheck() { }}
//             >
//                 Open
//             </Button>
//             <Offcanvas
//                 direction="end"
//                 toggle={function noRefCheck() { }}
//             >
//                 <OffcanvasHeader toggle={function noRefCheck() { }}>
//                     Offcanvas
//                 </OffcanvasHeader>
//                 <OffcanvasBody>
//                     <strong>
//                         This is the Offcanvas body.
//                     </strong>
//                 </OffcanvasBody>
//             </Offcanvas>
//         </div>
//     })
// }
// export default CustomSiddebar;