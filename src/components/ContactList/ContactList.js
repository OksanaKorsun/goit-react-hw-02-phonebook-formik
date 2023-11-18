import { ListItemText, DeleteButton, ListItem, List } from "./ContactList.styled";
export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => {
        return (
          <ListItem key={item.id}>
            <ListItemText>{item.name} - {item.number}</ListItemText>
          <DeleteButton onClick={() => onDelete(item.id)}>Delete</DeleteButton>
          </ListItem>
        );
      })}
    </List>
  );
};
