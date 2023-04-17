import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function TabButton({ label, path, queryParams, activeTab, setActiveTab }) {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    setActiveTab(label);
    history.push({
      pathname: path,
      search: new URLSearchParams(queryParams).toString(),
    });
  };

  const isActive = label === activeTab;

  return (
    <button
      className={`tab-button ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <div className="tabs">
      <TabButton
        label="Tab 1"
        path="/tab1"
        queryParams={{ param: 'value' }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabButton
        label="Tab 2"
        path="/tab2"
        queryParams={{ param: 'value' }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabButton
        label="Tab 3"
        path="/tab3"
        queryParams={{ param: 'value' }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabButton
        label="Tab 4"
        path="/tab4"
        queryParams={{ param: 'value' }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabButton
        label="Tab 5"
        path="/tab5"
        queryParams={{ param: 'value' }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
