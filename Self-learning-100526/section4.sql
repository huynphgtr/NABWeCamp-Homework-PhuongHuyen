CREATE TABLE tasks (
	id INTERGER PRIMARY KEY, 
  	title TEXT, 
  	completed BOOLEAN
); 

INSERT INTO tasks (title, completed) VALUES ('Learn React', false); 
SELECT * from tasks; 