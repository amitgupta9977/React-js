import { useState } from 'react';
import { Link, Route} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
function Tabs() {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const location = useLocation();

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className="tabs">
      <Route
        to={{
          pathname: '/tab1',
          search: '?param=value',
        }}
        onClick={() => handleTabClick('Tab 1')}
        className={`tab-button ${activeTab === 'Tab 1' ? 'active' : ''}`}
      >
        Tab 1
      </Route>
      <Route
        to={{
          pathname: '/tab2',
          search: '?param=value',
        }}
        onClick={() => handleTabClick('Tab 2')}
        className={`tab-button ${activeTab === 'Tab 2' ? 'active' : ''}`}
      >
        Tab 2
      </Route>
      <Route
        to={{
          pathname: '/tab3',
          search: '?param=value',
        }}
        onClick={() => handleTabClick('Tab 3')}
        className={`tab-button ${activeTab === 'Tab 3' ? 'active' : ''}`}
      >
        Tab 3
      </Route>
      <Route
        to={{
          pathname: '/tab4',
          search: '?param=value',
        }}
        onClick={() => handleTabClick('Tab 4')}
        className={`tab-button ${activeTab === 'Tab 4' ? 'active' : ''}`}
      >
        Tab 4
      </Route>
      <Route
        to={{
          pathname: '/tab5',
          search: '?param=value',
        }}
        onClick={() => handleTabClick('Tab 5')}
        className={`tab-button ${activeTab === 'Tab 5' ? 'active' : ''}`}
      >
        Tab 5
      </Route>
    </div>
  );
}


export default Tabs