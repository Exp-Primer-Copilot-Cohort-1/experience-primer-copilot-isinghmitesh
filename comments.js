// Create web server
app.get('/comments', function(req, res) {
    res.send('comments');
});

// Path: comments/:id
// Create web server
app.get('/comments/:id', function(req, res) {
    res.send('comments: ' + req.params.id);
});

// Path: comments/:id/edit
// Create web server
app.get('/comments/:id/edit', function(req, res) {
    res.send('edit comments: ' + req.params.id);
});

// Path: comments/:id/delete
// Create web server
app.get('/comments/:id/delete', function(req, res) {
    res.send('delete comments: ' + req.params.id);
});

// Path: comments/:id
// Create web server
app.post('/comments/:id', function(req, res) {
    res.send('update comments: ' + req.params.id);
});

// Path: comments/new
// Create web server
app.get('/comments/new', function(req, res) {
    res.send('new comments');
});

// Path: comments
// Create web server
app.post('/comments', function(req, res) {
    res.send('create comments');
});