# Load and configure shell
ZSH_THEME=robbyrussell HIST_STAMPS=yyyy-mm-dd
export ZSH=$HOME/.oh-my-zsh && source $ZSH/oh-my-zsh.sh

# Favorite aliases
alias ls=exa cat=bat find-unwanted-files="find -iname '*DS_Store' -type f" delete-unwanted-files="find-unwanted-files -delete" oxipng='oxipng -Zo6 -sa'

# Initialize version managers
export RBENV_ROOT=$HOME/.rbenv PYENV_ROOT=$HOME/.pyenv NVM_DIR=$HOME/.nvm
export PATH=$RBENV_ROOT/bin:$PYENV_ROOT/bin:$PATH

alias initialize-rbenv='eval "$(rbenv init -)"'
alias initialize-pyenv='eval "$(pyenv init -)"'
alias initialize-nvm='[ -s $NVM_DIR/nvm.sh ] && . $NVM_DIR/nvm.sh'
