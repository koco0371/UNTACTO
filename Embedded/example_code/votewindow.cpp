#include "votewindow.h"
#include "ui_votewindow.h"

VoteWindow::VoteWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::VoteWindow)
{
    ui->setupUi(this);
}

VoteWindow::~VoteWindow()
{
    delete ui;
}

void VoteWindow::pushCloseButton()
{
    this->close();
}
