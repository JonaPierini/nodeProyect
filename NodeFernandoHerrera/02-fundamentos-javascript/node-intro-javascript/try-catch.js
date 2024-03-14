import { useGetHomeShortcutsRequest } from '@services/api/content';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const DetailShortcust = () => {
  const [shortcut, setShortcut] = useState<{
    id: string;
    label: string;
  }>();

  const getHomeShortcuts = useGetHomeShortcutsRequest();
  const { id } = useParams<string>();

  const fetchHomeShortcutsData = async () => {
    try {
      const data = await getHomeShortcuts();
      if (data && Array.isArray(data)) {
        const shortcutItem = data.find((elem) => elem.id === id);
        if (shortcutItem) {
          setShortcut(shortcutItem);
        }
      }
    } catch (error) {
      console.error('Error fetching home shortcuts:', error);
    }
  };

  useEffect(() => {
    fetchHomeShortcutsData();
  }, [id]);

  return (
    <>
      {shortcut && (
        <>
          <div>{shortcut.label}</div>
          <div>{shortcut.id}</div>
        </>
      )}
    </>
  );
};