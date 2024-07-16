import React from "react";

const Nav = ({ isOpen }) => {
  return (
    <div className={`nav ${isOpen ? "" : "open"}`}>
      <ul>
        <li>
          <svg
            viewBox="0 0 24 24"
            width="26px"
            height="26px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20.9425C20 22.6114 18.0766 23.5462 16.7644 22.5152L12 18.7717L7.23564 22.5152C5.92338 23.5462 4 22.6114 4 20.9425V4ZM7 3C6.44772 3 6 3.44772 6 4V20.9425L12 16.2283L18 20.9425V4C18 3.44772 17.5523 3 17 3H7Z"
              fill="#aaaaaa"
            />
          </svg>
          &emsp;&emsp;Saved Messages
        </li>
        <li>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 1.25C9.37678 1.25 7.25013 3.37665 7.25013 6C7.25013 8.62335 9.37678 10.75 12.0001 10.75C14.6235 10.75 16.7501 8.62335 16.7501 6C16.7501 3.37665 14.6235 1.25 12.0001 1.25ZM8.75013 6C8.75013 4.20507 10.2052 2.75 12.0001 2.75C13.7951 2.75 15.2501 4.20507 15.2501 6C15.2501 7.79493 13.7951 9.25 12.0001 9.25C10.2052 9.25 8.75013 7.79493 8.75013 6Z"
              fill="#aaaaaa"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0001 12.25C9.68658 12.25 7.55506 12.7759 5.97558 13.6643C4.41962 14.5396 3.25013 15.8661 3.25013 17.5L3.25007 17.602C3.24894 18.7638 3.24752 20.222 4.52655 21.2635C5.15602 21.7761 6.03661 22.1406 7.22634 22.3815C8.4194 22.6229 9.97436 22.75 12.0001 22.75C14.0259 22.75 15.5809 22.6229 16.7739 22.3815C17.9637 22.1406 18.8443 21.7761 19.4737 21.2635C20.7527 20.222 20.7513 18.7638 20.7502 17.602L20.7501 17.5C20.7501 15.8661 19.5807 14.5396 18.0247 13.6643C16.4452 12.7759 14.3137 12.25 12.0001 12.25ZM4.75013 17.5C4.75013 16.6487 5.37151 15.7251 6.71098 14.9717C8.02693 14.2315 9.89541 13.75 12.0001 13.75C14.1049 13.75 15.9733 14.2315 17.2893 14.9717C18.6288 15.7251 19.2501 16.6487 19.2501 17.5C19.2501 18.8078 19.2098 19.544 18.5265 20.1004C18.156 20.4022 17.5366 20.6967 16.4763 20.9113C15.4194 21.1252 13.9744 21.25 12.0001 21.25C10.0259 21.25 8.58087 21.1252 7.52393 20.9113C6.46366 20.6967 5.84425 20.4022 5.47372 20.1004C4.79045 19.544 4.75013 18.8078 4.75013 17.5Z"
              fill="#aaaaaa"
            />
          </svg>
          &emsp;&emsp;Contacts
        </li>
        <li>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0701 19.0699C22.9801 15.1599 22.9801 8.82993 19.0701 4.92993"
              stroke="#aaaaaa"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.93006 4.92993C1.02006 8.83993 1.02006 15.1699 4.93006 19.0699"
              stroke="#aaaaaa"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.69995 21.4099C9.76995 21.7799 10.8799 21.96 11.9999 21.96C13.1199 21.95 14.2299 21.7799 15.2999 21.4099"
              stroke="#aaaaaa"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.69995 2.59009C9.76995 2.22009 10.8799 2.04004 11.9999 2.04004C13.1199 2.04004 14.2299 2.22009 15.2999 2.59009"
              stroke="#aaaaaa"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.73999 12.0001V10.3302C8.73999 8.25016 10.21 7.40014 12.01 8.44014L13.46 9.28017L14.91 10.1201C16.71 11.1601 16.71 12.8602 14.91 13.9002L13.46 14.7401L12.01 15.5802C10.21 16.6202 8.73999 15.7701 8.73999 13.6901V12.0001Z"
              stroke="#aaaaaa"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          &emsp;&emsp;My Stories
        </li>
        <li>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0002 8C9.79111 8 8.00024 9.79086 8.00024 12C8.00024 14.2091 9.79111 16 12.0002 16C14.2094 16 16.0002 14.2091 16.0002 12C16.0002 9.79086 14.2094 8 12.0002 8ZM10.0002 12C10.0002 10.8954 10.8957 10 12.0002 10C13.1048 10 14.0002 10.8954 14.0002 12C14.0002 13.1046 13.1048 14 12.0002 14C10.8957 14 10.0002 13.1046 10.0002 12Z"
              fill="#aaaaaa"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2867 0.5C9.88583 0.5 8.6461 1.46745 8.37171 2.85605L8.29264 3.25622C8.10489 4.20638 7.06195 4.83059 6.04511 4.48813L5.64825 4.35447C4.32246 3.90796 2.83873 4.42968 2.11836 5.63933L1.40492 6.83735C0.67773 8.05846 0.954349 9.60487 2.03927 10.5142L2.35714 10.7806C3.12939 11.4279 3.12939 12.5721 2.35714 13.2194L2.03927 13.4858C0.954349 14.3951 0.67773 15.9415 1.40492 17.1626L2.11833 18.3606C2.83872 19.5703 4.3225 20.092 5.64831 19.6455L6.04506 19.5118C7.06191 19.1693 8.1049 19.7935 8.29264 20.7437L8.37172 21.1439C8.6461 22.5325 9.88584 23.5 11.2867 23.5H12.7136C14.1146 23.5 15.3543 22.5325 15.6287 21.1438L15.7077 20.7438C15.8954 19.7936 16.9384 19.1693 17.9553 19.5118L18.3521 19.6455C19.6779 20.092 21.1617 19.5703 21.8821 18.3606L22.5955 17.1627C23.3227 15.9416 23.046 14.3951 21.9611 13.4858L21.6432 13.2194C20.8709 12.5722 20.8709 11.4278 21.6432 10.7806L21.9611 10.5142C23.046 9.60489 23.3227 8.05845 22.5955 6.83732L21.8821 5.63932C21.1617 4.42968 19.678 3.90795 18.3522 4.35444L17.9552 4.48814C16.9384 4.83059 15.8954 4.20634 15.7077 3.25617L15.6287 2.85616C15.3543 1.46751 14.1146 0.5 12.7136 0.5H11.2867ZM10.3338 3.24375C10.4149 2.83334 10.7983 2.5 11.2867 2.5H12.7136C13.2021 2.5 13.5855 2.83336 13.6666 3.24378L13.7456 3.64379C14.1791 5.83811 16.4909 7.09167 18.5935 6.38353L18.9905 6.24984C19.4495 6.09527 19.9394 6.28595 20.1637 6.66264L20.8771 7.86064C21.0946 8.22587 21.0208 8.69271 20.6764 8.98135L20.3586 9.24773C18.6325 10.6943 18.6325 13.3057 20.3586 14.7523L20.6764 15.0186C21.0208 15.3073 21.0946 15.7741 20.8771 16.1394L20.1637 17.3373C19.9394 17.714 19.4495 17.9047 18.9905 17.7501L18.5936 17.6164C16.4909 16.9082 14.1791 18.1618 13.7456 20.3562L13.6666 20.7562C13.5855 21.1666 13.2021 21.5 12.7136 21.5H11.2867C10.7983 21.5 10.4149 21.1667 10.3338 20.7562L10.2547 20.356C9.82113 18.1617 7.50931 16.9082 5.40665 17.6165L5.0099 17.7501C4.55092 17.9047 4.06104 17.714 3.83671 17.3373L3.1233 16.1393C2.9058 15.7741 2.97959 15.3073 3.32398 15.0186L3.64185 14.7522C5.36782 13.3056 5.36781 10.6944 3.64185 9.24779L3.32398 8.98137C2.97959 8.69273 2.9058 8.2259 3.1233 7.86067L3.83674 6.66266C4.06106 6.28596 4.55093 6.09528 5.0099 6.24986L5.40676 6.38352C7.50938 7.09166 9.82112 5.83819 10.2547 3.64392L10.3338 3.24375Z"
              fill="#aaaaaa"
            />
          </svg>
          &emsp;&emsp;Settings
        </li>
        <li>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C7.04 3 3 7.04 3 12C3 16.96 7.04 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3ZM12 19.5C7.86 19.5 4.5 16.14 4.5 12C4.5 7.86 7.86 4.5 12 4.5C16.14 4.5 19.5 7.86 19.5 12C19.5 16.14 16.14 19.5 12 19.5ZM14.3 7.7C14.91 8.31 15.25 9.13 15.25 10C15.25 10.87 14.91 11.68 14.3 12.3C13.87 12.73 13.33 13.03 12.75 13.16V13.5C12.75 13.91 12.41 14.25 12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V12.5C11.25 12.09 11.59 11.75 12 11.75C12.47 11.75 12.91 11.57 13.24 11.24C13.57 10.91 13.75 10.47 13.75 10C13.75 9.53 13.57 9.09 13.24 8.76C12.58 8.1 11.43 8.1 10.77 8.76C10.44 9.09 10.26 9.53 10.26 10C10.26 10.41 9.92 10.75 9.51 10.75C9.1 10.75 8.76 10.41 8.76 10C8.76 9.13 9.1 8.32 9.71 7.7C10.94 6.47 13.08 6.47 14.31 7.7H14.3ZM13 16.25C13 16.8 12.55 17.25 12 17.25C11.45 17.25 11 16.8 11 16.25C11 15.7 11.45 15.25 12 15.25C12.55 15.25 13 15.7 13 16.25Z"
              fill="#aaaaaa"
            />
          </svg>
          &emsp;&emsp;Telegram Features
        </li>
        <li>
          <svg
            width="26px"
            height="26px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="#aaaaaa"
              fill-rule="evenodd"
              d="M10.136.803a.75.75 0 011.061 1.06l-.415.416C11.525 2.932 12 3.853 12 4.909c0 .103-.005.205-.014.306.094.016.173.03.238.045a.973.973 0 01.776.951V6.6l1.571-.629a.75.75 0 01.557 1.393L13 8.214v1.13l1.849.246a.75.75 0 11-.198 1.487l-1.659-.221a3.935 3.935 0 01-.426 1.555l2.364.887a.75.75 0 01-.527 1.404l-2.667-1a.752.752 0 01-.12-.058C10.687 14.491 9.384 15 8 15s-2.687-.509-3.616-1.356a.752.752 0 01-.12.058l-2.667 1a.75.75 0 11-.527-1.404l2.364-.887a3.935 3.935 0 01-.426-1.555l-1.659.22a.75.75 0 01-.198-1.486L3 9.343V8.174L.971 7.363a.75.75 0 01.557-1.393L3 6.56V6.21c0-.474.334-.854.776-.95.065-.015.144-.03.238-.046C4.004 5.114 4 5.012 4 4.909c0-1.056.475-1.977 1.218-2.63l-.415-.415A.75.75 0 015.863.803l.695.694a4.318 4.318 0 012.884 0l.694-.694zm-4.63 4.26C6.133 5.026 6.946 5 8 5c1.054 0 1.867.026 2.494.063.004-.051.006-.102.006-.154C10.5 3.793 9.461 2.75 8 2.75S5.5 3.793 5.5 4.91c0 .05.002.102.006.153zM4.5 7.652v-.994C5.043 6.586 6.093 6.5 8 6.5s2.957.086 3.5.158v3.949c0 1.494-1.454 2.893-3.5 2.893-2.046 0-3.5-1.4-3.5-2.893v-.59-2.335-.03z"
              clip-rule="evenodd"
            />
          </svg>
          &emsp;&emsp;Report Bugs
        </li>
        <li>
          <span
            style={{
              fontSize: "26px",
              color: "#aaaaaa",
              marginLeft: "4.5px",
              textAlign: "center",
            }}
          >
            K
          </span>
          &emsp;&emsp;&nbsp;Switch to K Version
        </li>
        <li>
          <svg
            width="26px"
            height="26px"
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-179.000000, -600.000000)"
                fill="#aaaaaa"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M137.7,450 C137.7,450.552 137.2296,451 136.65,451 L134.55,451 L134.55,453 C134.55,453.552 134.0796,454 133.5,454 C132.9204,454 132.45,453.552 132.45,453 L132.45,451 L130.35,451 C129.7704,451 129.3,450.552 129.3,450 C129.3,449.448 129.7704,449 130.35,449 L132.45,449 L132.45,447 C132.45,446.448 132.9204,446 133.5,446 C134.0796,446 134.55,446.448 134.55,447 L134.55,449 L136.65,449 C137.2296,449 137.7,449.448 137.7,450 M133.5,458 C128.86845,458 125.1,454.411 125.1,450 C125.1,445.589 128.86845,442 133.5,442 C138.13155,442 141.9,445.589 141.9,450 C141.9,454.411 138.13155,458 133.5,458 M133.5,440 C127.70085,440 123,444.477 123,450 C123,455.523 127.70085,460 133.5,460 C139.29915,460 144,455.523 144,450 C144,444.477 139.29915,440 133.5,440"
                    id="plus_circle-[#1427]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          &emsp;&emsp;Install App
        </li>
      </ul>
      <div className="tele-version">Telegram Web A 10.9.8</div>
    </div>
  );
};

export default Nav;
