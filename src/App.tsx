import './index.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>TODOAPP</h1>
        </header>

        <div className="content">
          <button className="btn content__btn_new-todo">Добавить задачу</button>

          <div className="content__todo-views">
            <div className="content__todo-views_sort">
              <span className="active">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" rx="5" fill="#08FFC8"/>
                </svg>
                Все
              </span>
              <span>Текущие задачи</span>
              <span>Завершенные</span>
            </div>

            <div className="content__todo-views_cards">
              <div className="card content__todo-views_cards_card">
                <div className="card__header">
                  <h1 className="card__header_title">Заголовок TODO</h1>
                  <span className="card__header_priority">Приоритет 1</span>
                  <span className="card__header_data">17.08.2021</span>
                </div>
                <div className="card__content">
                  <p className="card__content_about">
                  Видно, что кроме многоэтажек на острове нет ни магазинов, ни дорог, ни намека на развитую инфраструктуру. Нет даже моста или паромной переправы, соединяющей их новое жилье с материком. Но жители «Простоквашино» похоже пошли на этот шаг не задумываясь. Что могло согнать их с привычной земли? Ответ очевиден – страх. Только страх мог вынудить людей, бросив все, перебраться в панельное жилье, уповая на то, что река сможет спасти их от того, от чего они бегут.
                  </p>
                </div>
                <div className="card__footer">
                  <button className="btn card__footer_btn">Выполнить</button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="content__new-todo">
            <div className="content__new-todo_top">
              <span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" rx="5" fill="#08FFC8"/>
                </svg>
                <h1>Добавить задачу</h1>
              </span>
              <div className="btn content__new-todo_title_cancel">Отмена</div>
            </div>
            <div className="input content__new-todo_input-title">
              <input type="text" placeholder="Название задачи"/>
            </div>
            <div className="input content__new-todo_input-about">
              <textarea placeholder="Описание"/>
            </div>
            <div className="content__new-todo_bottom">
              <div className="input content__new-todo_input-data">
                <input type="text" placeholder="Дедлайн" />
              </div>

              <div className="content__new-todo_bottom_priority">
                <span>Приоритет</span>
                <h3>Приоритет 2</h3>
                <div className="popup hidden">
                  <span>Приоритет 1</span>
                  <span className="active">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.59503 8.82668C4.48048 8.93797 4.3242 9.00006 4.16185 9.00006C3.99951 9.00006 3.84323 8.93797 3.72868 8.82668L0.26926 5.48472C-0.0897532 5.13795 -0.0897532 4.57565 0.26926 4.22953L0.702431 3.81103C1.06156 3.46426 1.64304 3.46426 2.00206 3.81103L4.16185 5.89726L9.99794 0.260136C10.3571 -0.0866306 10.9391 -0.0866306 11.2976 0.260136L11.7307 0.67864C12.0898 1.02541 12.0898 1.5876 11.7307 1.93383L4.59503 8.82668Z" fill="black"/>
                    </svg>

                    Приоритет 2</span>
                  <span>Приоритет 3</span>
                  <span>Приоритет 4</span>
                </div>
              </div>
            </div>

          </div> */}
        </div>
        
      </div>
    </div>
  );
}

export default App;
