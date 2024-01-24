import "./Search.css"



// export const Search = () => {
//   return (
//     <div className="centerblock__search search">
//       <svg className="search__svg">
//         <use xlinkHref="img/icon/sprite.svg#icon-search" />
//       </svg>
//       <input
//         className="search__text"
//         type="search"
//         placeholder="Поиск"
//         name="search"
//       />
//     </div>
//   );
// };
function AuthorList ()  {
  return (
      <ul className="popup-list author-list">
          <li className="popup-list__item">Michael Jackson</li>
          <li className="popup-list__item">Frank Sinatra</li>
          <li className="popup-list__item">Calvin Harris</li>
          <li className="popup-list__item">Zhu</li>
          <li className="popup-list__item">Arctic Monkeys</li>
          <li className="popup-list__item">Леонид Агутин</li>
      </ul>
  )
}


export default AuthorList;