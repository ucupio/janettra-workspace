import { useState } from 'react';
import {
  createStyles,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Text,
  Button,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

interface DataTableProps<T> {
  data: Array<T>;
  path?: string;
}

export function DataTable<T>({ data, path }: DataTableProps<T>) {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(['1']);

  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length
        ? []
        : data.map((_, index) => index.toString())
    );

  const columnHead = (object: object) => {
    return (
      <>
        {Object.keys(object).map((key: string) => (
          <th>
            <Group spacing="sm">
              <Text size="sm" weight={500}>
                {key.toUpperCase()}
              </Text>
            </Group>
          </th>
        ))}
      </>
    );
  };

  const columns = (object: Record<string, string>) => {
    return (
      <>
        {Object.keys(object).map((key: string) => (
          <td>
            <Group spacing="sm">
              <Text size="sm" weight={500}>
                {object[key as keyof typeof object]}
              </Text>
            </Group>
          </td>
        ))}
      </>
    );
  };
  const rows = data.map((item: Partial<T>, index: number) => {
    const selected = selection.includes(index.toString());
    return (
      <tr
        key={index.toString()}
        className={cx({ [classes.rowSelected]: selected })}
      >
        <td>
          <Checkbox
            checked={selection.includes(index.toString())}
            onChange={() => toggleRow(index.toString())}
            transitionDuration={0}
          />
        </td>
        {columns(item as Record<string, string>)}
        <td>
          <Group position="left" sx={{ display: 'inline-flex' }}>
            <Button component={Link} to={`./edit`} state={item} color={'cyan'}>
              Edit
            </Button>
            <Button component={Link} to={`./delete`} state={item} color={'red'}>
              Delete
            </Button>
          </Group>
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table
        sx={{ minWidth: 400 }}
        verticalSpacing="xs"
        fontSize={'sm'}
        mt="md"
        p={'sm'}
        width={'100%'}
      >
        <thead>
          <tr>
            <th>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={
                  selection.length > 0 && selection.length !== data.length
                }
                transitionDuration={0}
              />
            </th>
            {columnHead(data[0] as object)}
            <th>
              <Text>ACTION</Text>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
